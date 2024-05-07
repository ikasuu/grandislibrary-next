import React, { useEffect, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';

import ClassIntro, { ClassCreation, ClassExtraContent } from '../../components/class-overview/ClassIntro';
import ClassOutro from '../../components/class-overview/ClassOutro';
import HeaderImageUrl, { classes } from '../../special/SiteValues';
import HeaderImage from '../../components/HeaderImage';
import SkillTab from '../../components/class-overview/SkillTab';

function ClassOverview({post, slug}) {
    const [data, setData] = useState(post);
    const [BTFlag, setBTFlag] = useState(false);

    useEffect(() => {
      setData(post);
    },[slug])

    useEffect(() => {
      if(data.class === "Lynn"){
        setBTFlag(true);
      }
    }, data.class)

    return (
        <div>
            <Head>
              <title>{`${data.class} Class Overview | MapleStory | GrandisLibrary`}</title>
              <meta content={data.meta} name="description"/>
            </Head>
            <HeaderImage imageUrl={HeaderImageUrl.library}/>
            <Container>
              {BTFlag && <Alert variant="dark">As of May 2024, Beast Tamer has been replaced with the new class Lynn. For more info, please read Nexon's offical <a href="https://maplestory.nexon.net/news/88931/maple-memo-gms-roadmap-q1-2024" target="_blank" rel="noreferrer noopener">Maple Memo</a></Alert>}
              <ClassIntro data={data}/>
              {data.content.howToCreate && <ClassCreation classTitle={data.class} howToCreate={data.content.howToCreate}/>}
              {data.content.extraContent && <ClassExtraContent title={data.content.extraContent.title} content={data.content.extraContent.content}/>}
              <div id="skill"/>
              <SkillTab
                primary={data.skill.primary}
                fifth={data.skill.fifth}
                sixth={data.skill.sixth}
                hyper={data.skill.hyper}
                hyperSkillBuild={data.content.hyperBuild}
                nodeInfo={data.content.nodeInfo}
                slug={slug[0]}/>
              <ClassOutro classGroup={data.content.classGroup} classTitle={data.class} moreInfo={data.content.moreInfo} credits={data.content.credits} infographic={data.content.infographic}/>
            </Container>
        </div>
    );
}

// This function gets called at build time
export async function getStaticPaths() {

  const paths = classes.other.map((job) => ({
    params: { slug: [job[0]] },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(`https://raw.githubusercontent.com/ikasuu/grandislibrary/master/public/data/other/${params.slug[0]}.json`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post, slug: params.slug,} };
}

export default ClassOverview;
