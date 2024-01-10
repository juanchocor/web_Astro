import Badge from '../components/Badge.astro';
import Layout from '../layouts/Layout.astro';

<Fragment>
<Layout title="Portafolio">
<main>
<section class="w-full mx-auto lg:w-[740px] py-44">
<img class="rounded-full w-12 h-12 mb-4" src="https://avatars.githubusercontent.com/u/131068518?v=4" alt="Juancho foto" />
<h1 class="text-white text-5xl font-bold flex flex-row gap-x-4 pb-7">{`
				Hey, I'm Juancho `}<a href="https://www.linkedin.com/in/juan-david-cordoba-610a66281/" target="_blank" rel="noopener" class="flex justify-center items-center">
<Badge>Data Scientins</Badge>
<a />
</a>
<h2 class="text-2xl opacity-90 text-wrap">
💻 Software developer and lover of data science 📊.
<span class="text-yellow-200/90">Transforming data into innovative solutions.
</span> 🚀 Exploring code and creating unique digital experiences. 🌐 Connect for an inspiring tech journey.
</h2>

<ul>
<li>
<a href="https://www.linkedin.com/in/juan-david">
<Linkedin />
Linkedin
</a>
</li>
</ul>
</h1>
</section>
</main></Layout>
</Fragment>;
