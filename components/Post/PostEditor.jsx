import React from 'react';
import styled from '@emotion/styled';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const PostEditor = () => {
  const { quill, quillRef } = useQuill();

  return (
    <CustomEditor>
      <div ref={quillRef} />
    </CustomEditor>
  );
};

const CustomEditor = styled.div`
  .ql-toolbar, .ql-container {
    border: 1px solid #222222;
    border-top: 0;
  }
`;

export default PostEditor;
