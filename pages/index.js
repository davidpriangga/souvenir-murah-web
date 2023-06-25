import Head from 'next/head';
import Featured from '../components/Featured';

const Home = () => {
   return (
      <div>
         <Head>
            <title>Home</title>
        <link rel="icon" href="/img/logo.png" />
         </Head>
         <Featured />
      </div>
   );
};

export default Home;
