/* eslint-disable import/no-extraneous-dependencies */
import React, { FC } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/tippy.css';

const Token: FC<{ token: string, meta: string }> = ({ token, meta }) => (
    <Tippy theme="light" content={meta}>
        <span className="rounded-full transition-all duration-200 hover:shadow-xl hover:bg-primary hover:font-medium hover:px-2 hover:py-1">{token}</span>
    </Tippy>
);

const Analyzer: FC<{ res: any }> = ({ res }) => {
    if (!res) return null;

    console.log(res);

    return (
        <div className="relative w-full mt-12 flex flex-row justify-between">
            <p className="sticky w-1/2 space-x-3 text-xl bg-neutral rounded-xl p-4">
                {res && res.display && (res.display ?? []).map(
                    (r: any) => (r.token === '\n' ? <br className="my-1" /> : <Token token={r.token} meta={r.meta} />),
                )}
            </p>
            <table className="w-1/2 table table-zebra">
                <thead>
                    <tr>
                        <th>Found At</th>
                        <th>Meta</th>
                        <th>Token</th>
                    </tr>
                </thead>
                <tbody>
                    {res && res.tokenized && (Object.entries(res.tokenized) ?? []).map(
                        ([key, value]) => (
                            <tr>
                                <td>{key}</td>
                                <td>{value.meta}</td>
                                <td>{value.token}</td>
                            </tr>
                        ),
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Analyzer;
