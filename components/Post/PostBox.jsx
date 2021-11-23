import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
const PostBox = () => {
  return (
    <Card
      hoverable
      cover={<img alt="example" src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" />}
    >
      <Meta title="포스트 박스 테스트!!!!!!" description="김아무개아무말대잔치가나다라감사과"></Meta>
    </Card>
  )
};

export default PostBox;