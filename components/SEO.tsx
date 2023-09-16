// import Head from 'next/head'
// import { Seo } from '@/types/types.post'

// type CommonSEOProps = {
// 	seoData: Seo
// 	pageName?: string
// 	description?: string
// 	ogType?: string
// 	featuredImage?: string
// 	date?: string | Date
// 	slug?: string
// }

// const CommonSEO = ({
// 	seoData,
// 	ogType = "website",
// 	featuredImage = siteMetadata.socialBanner,
// 	date,
// 	slug
// }: CommonSEOProps) => {
// 	const canonicalUrl = `${siteMetadata.siteUrl}${slug}`
// 	const title = seoData?.metaTitle || siteMetadata.title
// 	const descriptionContent = seoData?.metaDescription || siteMetadata.description
// 	const metaRobots = seoData?.metaRobots
// 	const keywords = seoData?.keywords
// 	const metaImage = seoData?.metaImage?.data?.attributes?.url || siteMetadata.socialBanner
// 	const metaViewport = seoData?.metaViewport
// 	const metaSocial = seoData?.metaSocial

// 	return (
// 		<Head>
// 			<title>{title}</title>
// 			<meta name="robots" content={metaRobots || "follow, index"} />
// 			<meta name="description" content={descriptionContent} />
// 			<meta name="keywords" content={keywords} />
// 			<meta property="og:url" content={canonicalUrl} />
// 			<meta property="og:type" content={ogType} />
// 			<meta property="og:site_name" content={siteMetadata.title} />
// 			<meta property="og:description" content={descriptionContent} />
// 			<meta property="og:title" content={title} />
// 			<meta property="og:image" content={metaImage} key={metaImage} />
// 			<meta name="viewport" content={metaViewport || "width=device-width, initial-scale=1"} />
// 			{metaSocial && metaSocial.map((social, index) => (
// 				<meta property={`og:${social.socialNetwork.toLowerCase()}:title`} content={social.title} key={index} />
// 			))}
// 			<meta name="twitter:card" content="summary_large_image" />
// 			<meta name="twitter:title" content={title} />
// 			<meta name="twitter:description" content={descriptionContent} />
// 			<meta name="twitter:image" content={metaImage || featuredImage} />
// 			<link rel="canonical" href={canonicalUrl} />
// 			{date && <meta property="article:published_time" content={new Date(date).toISOString()} />}
// 		</Head>
// 	)
// }

// export default CommonSEO
