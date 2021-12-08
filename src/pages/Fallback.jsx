import React from 'react';
import 'twin.macro';
import { Spinner, Skeleton } from '../shared/Spinner';
import Brand from '../layout/Brand/Brand';

const Fallback = () => {
  return (
    <div tw="w-full bg-primary h-screen flex flex-col gap-3 justify-center items-center font-primary">
      <Spinner>
        <Skeleton />
      </Spinner>
      <Brand />
      <p>Loading... </p>
    </div>
  );
};

export default Fallback;
