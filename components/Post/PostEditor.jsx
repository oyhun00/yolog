import React from 'react';
import styled from '@emotion/styled';
import 'quill/dist/quill.snow.css';

const PostEditor = ({ quillRef }) => (
  <CustomEditor>
    <div ref={quillRef} />
  </CustomEditor>
);

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
