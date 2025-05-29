import React, { useEffect, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import Head from 'next/head';

import ClassIntro, { ClassCreation, ClassExtraContent } from '../../components/class-overview/ClassIntro';
import ClassOutro from '../../components/class-overview/ClassOutro';
import HeaderImageUrl, { classes } from '../../special/SiteValues';
import HeaderImage from '../../components/HeaderImage';
import SkillTab from '../../components/class-overview/SkillTab';

function ClassOverview({post, slug}) {
    const [data, setData] = useState(post);

    useEffect(() => {
      setData(post);
    },[slug]);

    return (
        <div>
            <Head>
              <title>{`${data.class} Class Overview | MapleStory | GrandisLibrary`}</title>
              <meta content={data.meta} name="description"/>
            </Head>
            <HeaderImage imageUrl={HeaderImageUrl.library}/>
            <Container>
              <Alert variant="danger">
                <p>Pre-Release Sia Class Overview, info is subject to change. All information is unconfirmed and based on MapleStory M skill info. Currently on hiatus and will return in July to update Class Overview</p>
                <p>[Update - May 28] Sia is officially stated to be focusing on offense in GMS in contrast to MSM where it is a mix of offensive and supportive. As such, Sia's party buffs are expected to be changed. More info can be found on the <a href="https://www.nexon.com/maplestory/news/general/27184/introducing-sia-astelle" target="_blank" rel="noreferrer noopener">official GMS preview</a></p>
              </Alert>
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

  const paths = classes.starGuardian.map((job) => ({
    params: { slug: [job[0]] },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(`https://raw.githubusercontent.com/ikasuu/grandislibrary/master/public/data/star-guardian/${params.slug[0]}.json`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post, slug: params.slug,} };
}

export default ClassOverview;
