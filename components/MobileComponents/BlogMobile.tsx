import React from "react";
import Article from "../Article";
import PoliticsMobile from "../DeskComponents/PoliticsMobile";

const BlogMobile = () => {
    return (
        <>
            <div className='md:hidden flex flex-col items-start ml-8 bg-white pb-28'>
                <TitleBar />
                <FeaturedImage />
                <ArticleContent />
                <RelatedArticles />
            </div>
        </>
    );
};

const TitleBar = () => (
    <p className='bg-white text-2xl w-[70vw] font-semibold text-black mt-16 mobileLandingTitle'>
        Dynamics of Northern Nigeria&apos;s Political Landscape
    </p>
);

const FeaturedImage = () => (
    <div className="relative h-[40vh] flex w-[85vw] mt-6 items-center bg-[url('/images/elrufai.jpg')] bg-cover bg-center md:bg-center bg-no-repeat">
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
    </div>
);

const ArticleContent = () => (
    <article className='max-w-7xl' itemID='#' itemScope itemType='http://schema.org/BlogPosting'>
        <ArticleHeader />
        <div className='mx-auto prose mr-10 mobileParagraph text-justify leading-6 text-gray-700'>
				<p>
							In the vast expanses of Northern
							Nigeria, a nuanced political
							tapestry unfolds against the
							backdrop of rich history and
							diverse cultures. This region,
							marked by a complex interplay of
							power dynamics and
							socio-economic intricacies,
							invites scrutiny and
							exploration. Navigating the
							intricate terrain of Northern
							Nigerian politics reveals a call
							for grassroots unity and
							collective agency. <br></br>
							<br></br>
							The emphasis on community-driven
							initiatives mirrors an unspoken
							desire for local empowerment, as
							diverse communities seek to
							shape their destinies in unison.{" "}
							<br></br>
							<br></br>A critical analysis of
							the prevailing structures of
							authority prompts a reevaluation
							of the narratives that shape
							Northern Nigeria&apos;s
							socio-political discourse.
							Peeling back layers reveals
							disparities rooted in historical
							decisions, economic
							inequalities, and challenges
							that persist in the face of
							progress. <br></br>
							<br></br>In the Shadow of
							Tradition:
							<br></br>
							<br></br>The juxtaposition of
							tradition and progress casts a
							significant shadow over Northern
							Nigeria&apos;s political arena.
							An exploration of how local
							traditions can serve as sources
							of strength emerges, fostering
							the potential for a unified
							voice within the mosaic of
							ethnicities and cultures.
							<br></br>
							<br></br> Echoes of Inequality:
							<br></br>
							<br></br>Scrutinizing economic
							and political disparities brings
							attention to the lingering
							effects of uneven development
							and resource mismanagement. The
							question arises, can a fair and
							just society emerge from the
							persistent inequalities that
							have shaped the region&apos;s
							trajectory? Navigating the
							Future: Sustainable change,
							rooted in community engagement
							and the amplification of local
							voices, becomes a focal point.
							<br></br>
							<br></br>The vision for a
							decentralized power structure
							and transparent decision-making
							emerges as a pathway to shaping
							the political future of Northern
							Nigeria. <br></br>
							<br></br>As we immerse ourselves
							in the vibrant mosaic of
							Northern Nigeria, guided by a
							spirit of collective endeavor,
							it becomes evident that the
							region stands at a pivotal
							juncture.
							<br></br>
							<br></br>The seeds of
							transformation are sown in the
							winds of change, and Northern
							Nigeria is poised for a
							political evolution shaped by
							the aspirations and efforts of
							its people.
						</p>
        </div>
    </article>
);

const ArticleHeader = () => (
    <div className='w-full mx-auto z-20 mb-12 text-left md:w-2/3'>
        <p className='text-gray-700 mt-6 headeMenus'>
            Written by
            <span className='byline author vcard' itemProp='author' itemScope itemType='http://schema.org/Person'>
                <a href='/blog' target='_blank' itemProp='url' rel='author noopener noreferrer' className='text-yellow-600 hover:text-primary-dark'>
                    <span itemProp='name' className='ml-2 mr-2'>Aliyu Nura</span>
                </a>
            </span>
            <time itemProp='datePublished dateModified' dateTime='2010-08-07 11:11:03-0400'>Oct 02 2024</time>
        </p>
				<div className='flex  mt-6 headeMenus items-center mb-6 space-x-2'>
							<a
								href='/blog'
								className='text-gray-600 hover:text-gray-900'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									className='flex-none w-5 h-5'
									fill='currentColor'
								>
									<path d='M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z' />
								</svg>
							</a>
							<a
								href='/blog'
								className='text-gray-600 hover:text-gray-900'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									className='flex-none w-5 h-5'
									fill='currentColor'
								>
									<path d='M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z' />
								</svg>
							</a>
							<a
								href='/blog'
								className='text-gray-600 hover:text-gray-900'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									className='flex-none w-5 h-5'
									fill='currentColor'
								>
									<circle
										cx='4.983'
										cy='5.009'
										r='2.188'
									/>
									<path d='M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z' />
								</svg>
							</a>
						
        </div>
    </div>
);

const RelatedArticles = () => (
    <div className='mt-24'>
        <PoliticsMobile />
    </div>
);

export default BlogMobile;
