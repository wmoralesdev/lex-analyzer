import React, { FC } from 'react';
import Layout from '@components/Layout';
import { useMutation } from '@tanstack/react-query';
import { uploadSourceCode } from '@services/http.service';
import Analyzer from '@components/Analyzer';

const App: FC = () => {
    const { data: res, mutateAsync } = useMutation((data: FormData) => uploadSourceCode(data));

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        await mutateAsync(formData);
    };

    return (
        <Layout>
            <header>
                <h1 className="center-row-y text-white font-bold text-3xl">
                    Lex Analyzer for
                    <span className="rounded-full bg-accent py-1 px-4 text-4xl">C++</span>
                </h1>
            </header>
            <section className="w-full mt-4">
                <form onSubmit={onSubmit} className="w-full center-row-y">
                    <h2 className="font-medium text-xl w-1/4">Select your file:</h2>
                    <input name="file" type="file" className="file-input file-input-bordered file-input-accent w-full" />
                    <button type="submit" className="btn btn-accent w-1/5">Analyze</button>
                </form>
            </section>
            <section>
                <Analyzer res={res} />
            </section>
        </Layout>
    );
}

export default App;
