import React, { FC } from 'react';
import Layout from '@components/Layout';

const App: FC = () => (
    <Layout>
        <header>
            <h1 className="center-row-y text-white font-bold text-3xl">
                Lex Analyzer for
                <span className="rounded-full bg-accent py-1 px-4 text-4xl">C++</span>
            </h1>
        </header>
        <section className="w-full mt-4">
            <article className="w-full center-row-y">
                <h2 className="font-medium text-xl w-1/4">Select your file:</h2>
                <input type="file" className="file-input file-input-bordered file-input-accent w-full" />
            </article>
        </section>
    </Layout>
);

export default App;
