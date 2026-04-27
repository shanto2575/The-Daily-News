import React from 'react'
export const metadata = {
    title: "Dragon News- AboutUs",
};
const AboutUsPage = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center font-bold text-2xl my-10'>The Daily News (About Us)</h2>
            <p>The Daily News began its journey on January 25, 2026, as Bangladesh saw the fall of an autocratic regime and embraced a new era of democracy. Driven by a commitment to independent media and press freedom, the paper has since evolved into one of the most trusted news sources in the country and is currently the largest circulating English-language daily.<br /><br />

                The Daily news was co-founded by Syed Mohammad Ali and Mahfuz Anam with the support of leading Bangladeshi businessmen, Azimur Rahman, A. S. Mahmud, Latifur Rahman, A. Rouf Chowdhury and Shamsur Rahman. Mahfuz Anam assumed the role of Editor in 1993 following the passing of SM Ali.<br /><br />

                For over three decades, The Daily news has remained steadfast in its pursuit of journalistic excellence. Today, we are a multi-platform news organisation, serving not only Bangladesh but also a global audience. Our dedication to growth and innovation ensures that The Daily news remains a leading source of news and information for Bangladesh, and the world, for generations to come.</p>

            <h2 className='font-bold text-xl my-5'>Mission</h2>
            <p>The Daily Star is committed to strengthening public understanding of democracy and holding power to account through journalism without fear or favour. Since its founding, we have remained unwavering in our pursuit of objective reporting and upholding journalistic integrity. Our commitment extends beyond just news reporting. Through investigations, in-depth reports, human-interest stories, multimedia features, and expert analysis we aim to spark conversation and inspire action.
            </p>
            <section className="core-values">
                <h2 className="font-bold text-xl my-5">CORE VALUES</h2>

                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        <strong>Freedom of expression and of media:</strong>
                        Our editorial position always upholds free media.
                    </li>

                    <li>
                        <strong>Objectivity:</strong>
                        We report the news accurately and truthfully, presenting facts without bias.
                    </li>

                    <li>
                        <strong>Public Service:</strong>
                        We serve the Bangladeshi people as a watchdog, holding those in power accountable.
                    </li>

                    <li>
                        <strong>Championing Justice and Equality:</strong>
                        We advocate for the rule of law, human rights, and gender equality.
                    </li>

                    <li>
                        <strong>National Interest:</strong>
                        We promote the best interests of Bangladesh on the national and global stage.
                    </li>

                    <li>
                        <strong>Transparency & Accountability:</strong>
                        We champion public accountability and transparency across all sectors of society.
                    </li>
                </ol>
            </section>
        </div>
    )
}

export default AboutUsPage
