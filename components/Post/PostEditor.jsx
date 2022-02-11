import React from 'react';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    [{ align: [] }, { color: [] }, { background: [] }],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image',
  'align', 'color', 'background',
];

const Quill = dynamic(import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> });
const PostEditor = ({ setContent, content }) => {
  // const onChange = () => setContent({ ...content, desc: e.target.value });

  return (
    <CustomEditor>
      <Quill name="desc" onChange={setContent} value={content} />
    </CustomEditor>
  );
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
