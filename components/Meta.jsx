import Head from 'next/head';
import React from 'react';

const Meta = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
      <link rel='icon' href='' />
    </Head>
  );
};

export default Meta;
