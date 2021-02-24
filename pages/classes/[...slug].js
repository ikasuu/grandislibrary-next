import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';

import ClassIntro, { ClassCreation, ClassExtraContent } from '../../components/class-overview/ClassIntro';
import ClassOutro from '../../components/class-overview/ClassOutro';
import HeaderImageUrl from '../../special/Values';
import HeaderImage from '../../components/HeaderImage';
import SkillTab from '../../components/class-overview/SkillTab';

function ClassOverview() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [fail, setFail] = useState(false);

    const router = useRouter();
    const slug = router.query.slug || [];

    useEffect(() => {
        console.log(slug);
        fetch(`/data/${slug.join('/')}.json`)
        .then(res => res.json())
        .then(fetchedData => {
            setData(fetchedData);
            setLoading(false);
        })
        .catch(err => setFail(true));
    }, []);

    return (
        <div>
            <HeaderImage imageUrl={HeaderImageUrl.library}/>
            {
                loading ? <Container>{fail ? <h3>Looks like there was an error in the URL you entered,
                    the page you are looking for may be moved or deleted.</h3> : ""}</Container> :
                <div>
                  <Head>
                    <title>{`${data.class} | Grandis Library`}</title>
                    <meta content={data.meta} name="description"/>
                  </Head>
                  <Container>
                    <ClassIntro data={data}/>
                    {data.content.howToCreate && <ClassCreation classTitle={data.class} howToCreate={data.content.howToCreate}/>}
                    {data.content.extraContent && <ClassExtraContent title={data.content.extraContent.title} content={data.content.extraContent.content}/>}
                    <div id="skill"/>
                    <SkillTab
                      primary={data.skill.primary}
                      fifth={data.skill.fifth} hyper={data.skill.hyper}
                      hyperSkillBuild={data.content.hyperBuild}
                      nodeInfo={data.content.nodeInfo}/>
                    <hr/>
                    <ClassOutro classGroup={data.content.classGroup} classTitle={data.class} moreInfo={data.content.moreInfo} credits={data.content.credits}/>
                  </Container>
                </div>
            }
        </div>
    );
}

export default ClassOverview
