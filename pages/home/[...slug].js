import React from 'react';

function OldSectionPage() {
    return (
        <div>
            This page is unused, it is for redirecting users from previous URL to new site URL structure
        </div>
    )
}

// This function gets called at build time
export async function getStaticPaths() {

    return { paths: [{ params: { slug: 'content' } }, { params: { id: 'classes' }, }, { params: { id: 'events' }, }, { params: { id: 'resources' }, }], fallback: false }
  }
  
// This also gets called at build time
export async function getStaticProps({ params }) {
    return {
        redirect: {
            destination: `/${params.slug}`,
            permanent: true,
            slug: params.slug,
        }
    }
}

export default OldSectionPage();
