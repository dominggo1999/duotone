import React from 'react';
import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  ${tw`
    w-full 
    h-screen
    bg-primary  
    flex
    justify-center 
    items-center 
    flex-col
  `}
`;

export const Text = styled.p`
  ${tw`
    font-bold 
    text-8xl
  `}
`;

export const Message = styled.div`
  ${tw`
    mb-2
  `}
  
  a{
    ${tw`text-accent font-semibold underline`}
  }
`;

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <Text>404</Text>
      <Message>Page Not Found</Message>
      <Message>
        <Link to="/">Back To Editor</Link>
      </Message>
    </PageWrapper>
  );
};

export default NotFoundPage;
