import Container from '@/components/Container';
import tw from '@/utilities/tailwindcss'
import Image from 'next/image';
import Link from 'next/link';

type Links = {
    title: string,
    url: string
}

const links: Links[] = [
    {
        title: 'youtube',
        url: 'https://www.youtube.com/@codingwithkishoryadav'
    },
    {
        title: 'instagram',
        url: 'https://www.instagram.com/gg.gyaniguru'
    },
    {
        title: 'facebook',
        url: 'https://www.facebook.com/profile.php?id=61556896329245'
    },
    {
        title: 'x',
        url: 'https://x.com/gg_gyaniguru'
    },
    {
        title: 'linkedin',
        url: 'https://www.linkedin.com/in/gyaniguru'
    },
    {
        title: 'github',
        url: 'https://github.com/gg-gyaniguru'
    },
    {
        title: 'discord',
        url: 'https://discordapp.com/users/gg.gyaniguru'
    },
    {
        title: 'npm',
        url: 'https://www.npmjs.com/~gg.gyaniguru'
    },
    {
        title: 'pinterest',
        url: 'https://in.pinterest.com/gg_gyaniguru'
    },
    {
        title: 'whatsapp',
        url: 'https://wa.me/+918076358992'
    },
    {
        title: 'telegram',
        url: 'https://t.me/gg_gyaniguru'
    }
]

const Page = () => {
    return (
        <Container>
            <div className={tw('py-6 absolute left-0 top-0 right-0 bottom-0 overflow-auto')}>
                <div className={tw('text-center')}>connectify</div>
                <div className={tw('w-fit m-auto')}>
                    <div className={tw('mt-6 flex flex-wrap gap-3.5 items-center justify-center')}>
                        <div className={tw('')}>
                            <Image width={65} height={65} src={'/image.png'} alt={''} priority={true}/>
                        </div>
                        <div className={tw('')}>
                            <div className={tw('')}>kishor yadav</div>
                            <div className={tw('')}>gg.gyaniguru@gmail.com</div>
                        </div>
                    </div>
                    <div className={tw('mt-9 flex flex-col gap-3.5')}>
                        {
                            links.map(({title, url}) => (
                                <Link className={tw('w-full px-3 py-1.5 text-center rounded-xl bg-white/15')} href={url} target={'_blank'} key={title}>{title}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Page;