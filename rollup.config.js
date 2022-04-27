import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import fs from "fs"
import path from "path"

// Configuration for individual components and entry point per component module folder
const componentsConfig = []
const generateComponentsConfigs = (baseDir) => {
    const dr = fs.readdirSync(baseDir)
    dr.map((d) => {
        const fp = path.join(baseDir, d)
        if (fs.lstatSync(fp).isDirectory()) {
            // console.log(fp)
            generateComponentsConfigs(fp)
        }
        if (fs.lstatSync(fp).isFile()) {
            // console.log(baseDir)
            // console.log(fp)
            // console.log(d)
            const fileName = d.split('.')
            let bsDirArr = []
            bsDirArr = baseDir.split('\\')
            let formattedInputSrc = ''
            if (fileName && fileName.length > 0 && fileName.length === 2 && (fileName[1] === 'js' || fileName[1] === 'jsx')) {
                // console.log(`FORMATTED PATH: ${bsDirArr.join('/')}/${d}`)
                // console.log(fileName[0] + "==" + fileName[1])
                formattedInputSrc = `${bsDirArr.join('/')}/${d}`
                let exportsType = fileName[0] === 'index' ? 'auto' : 'default'
                componentsConfig.push({
                    input: [`${formattedInputSrc}`],
                    output: [
                        { file: `dist/${bsDirArr.join('/')}/${fileName[0]}.js`.replace('src', 'lib'), format: 'cjs', sourcemap: true, exports: exportsType },
                        { file: `dist/${bsDirArr.join('/')}/${fileName[0]}.esm.js`.replace('src', 'lib'), format: 'esm', sourcemap: true, exports: exportsType },
                    ],
                    plugins: [
                        postcss({
                            plugins: [],
                            minimize: true,
                            extensions: [".css", ".scss"],
                        }),
                        resolve({
                            preferBuiltins: true,
                            extensions: [".js", ".jsx", ".css", ".scss"]
                        }),
                        commonjs({
                            include: /node_modules/,
                            namedExports: {
                                'react': ['React'],
                                'classnames': ['classNames'],
                                'react-text-mask': ['MaskedInput'],
                                'react-hook-form': ['reactHookForm'],
                            }
                        }),
                        babel({
                            exclude: 'node_modules/**',
                            presets: ['@babel/preset-react'],
                        }),
                        external(),
                        terser(),
                    ]
                })
            }
        } else {
            // console.log("=====")
            // console.log(baseDir)
            // console.log(fp)
            // console.log(d)
            // console.log("=====")
            componentsConfig.push({
                input: [`./${baseDir}/${d}/index.js`],
                output: [
                    { file: `dist/${fp}/${d}.js`.replace('src', 'lib'), format: 'cjs', sourcemap: true, exports: 'auto' },
                    { file: `dist/${fp}/${d}.js`.replace('src', 'lib'), format: 'esm', sourcemap: true, exports: 'auto' },
                ],
                plugins: [
                    postcss({
                        plugins: [],
                        minimize: true,
                        extensions: [".css", ".scss"],
                    }),
                    resolve({
                        preferBuiltins: true,
                        extensions: [".js", ".jsx", ".css", ".scss"]
                    }),
                    commonjs({
                        include: /node_modules/,
                        namedExports: {
                            'react': ['React'],
                            'classnames': ['classNames'],
                            'react-text-mask': ['MaskedInput'],
                            'react-hook-form': ['reactHookForm'],
                        }
                    }),
                    babel({
                        exclude: 'node_modules/**',
                        presets: ['@babel/preset-react'],
                    }),
                    external(),
                    terser(),
                ]
            })
        }
    })
    return componentsConfig
}

const showGeneratedComponentConfig = () => {
    console.log(`\n ======COMPONENT CONFIGURATION====== \n`)
    console.log(JSON.stringify(componentsConfig))
    return []
}

export default [
    ...generateComponentsConfigs('./src/components'),
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/lib/index.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/lib/index.esm.js',
                format: 'esm',
                sourcemap: true,
            }
        ],
        plugins: [
            scss({
                // include: [`/**/*/.css`,`/**/*/.scss`,`/**/*/.sass`],
                output: `dist/lib/styles/index.css`,
                failOnError: true,
                runtime: require('sass'),
            }),
            postcss({
                plugins: [],
                minimize: true,
                extensions: [".css", ".scss"],
            }),
            resolve({
                preferBuiltins: true,
                extensions: [".js", ".jsx", ".css", ".scss"]
            }),
            commonjs({
                include: /node_modules/,
                namedExports: {
                    'react': ['React'],
                    'classnames': ['classNames'],
                    'react-text-mask': ['MaskedInput'],
                    'react-hook-form': ['reactHookForm'],
                }
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(),
            terser(),
        ],
    },
    ...showGeneratedComponentConfig(),
]