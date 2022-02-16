import React, { useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import * as PropTypes from 'prop-types';
import { uploadImage } from '@Store/reducers/util';

const Quill = dynamic(import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> });
const PostEditor = ({ setPost, post }) => {
  const dispatch = useDispatch();
  const QuillRef = useRef();
  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async (e) => {
      const { files } = e.target;
      const formData = new FormData();
      formData.append('files', files[0]);

      dispatch(uploadImage(formData));
    };
  };

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
  }), []);

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
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
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
