import React, { Component } from 'react';
import dynamic from 'next/dynamic'
import Quill from 'quill';

const PostEditor = dynamic(import('react-quilljs'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
    ['clean']
  ],
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

export default function Home() {
  return <PostEditor modules={modules} formats={formats} theme="snow" />
};