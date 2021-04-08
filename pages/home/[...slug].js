import React from 'react';

function OldSectionPage() {
    return (
        <div>
            This page is unused, it is for redirecting users from previous URL to new site URL structure
        </div>
    );
}

// This function gets called at build time
export async function getStaticPaths() {

    return { paths: [{params: { slug: ['content'] }}, {params: { slug: ['classes'] }}, {params: { slug: ['events'] }}, {params: { slug: ['resources'] }}], fallback: false }
  }
  
// This also gets called at build time
export async function getServerSideProps({ params }) {
    return {
        redirect: {
            destination: `/${params.slug}`,
            permanent: true,
            slug: params.slug,
        }
    }
}

export default OldSectionPage;
