import React, { useMemo, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import * as PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import axios from 'axios';

const Quill = dynamic(async () => {
  const { default: ReactQuill } = await import('react-quill');
  return function editor({ forwardedRef, ...props }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ReactQuill ref={forwardedRef} {...props} />;
  };
}, { ssr: false, loading: () => <p>Loading ...</p> });

const PostEditor = ({ setPost, post }) => {
  const quillRef = useRef();
  const imageHandler = useCallback(() => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async (e) => {
      const formData = new FormData();
      formData.append('files', e.target.files[0]);

      try {
        const localImage = await axios.post('/api/util', formData);
        const { location } = localImage.data;
        const range = quillRef.current.getEditorSelection();

        quillRef.current.getEditor().insertEmbed(range.index, 'image', location);
        quillRef.current.getEditor().setSelection(range.index + 1);

        document.body.querySelector(':scope > input').remove();
      } catch (error) {
        toast.error(error);
      }
    };
  }, []);

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image'],
        [{ align: [] }, { color: [] }, { background: [] }],
      ],
      handlers: { image: imageHandler },
    },
  }), [imageHandler]);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align', 'color', 'background',
  ];

  const onChangeEditor = (string, delta, source, editor) => {
    setPost({ ...post, content: string, thumbnailText: editor.getText(0, 200) });
  };

  return (
    <CustomEditor>
      <Quill
        forwardedRef={quillRef}
        onChange={onChangeEditor}
        value={post.content}
        modules={modules}
        formats={formats}
      />
    </CustomEditor>
  );
};

PostEditor.propTypes = {
  setPost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    content: PropTypes.string,
  }),
};

PostEditor.defaultProps = {
  post: {},
};

const CustomEditor = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;

  .ql-container {
    flex: auto;
    border-bottom: 1px solid #212121 !important;
  }
  
  .ql-toolbar, .ql-container {
    border: none;
    border-top: 0;
  }
`;

export default PostEditor;
