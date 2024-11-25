// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { highlighter } from '@/styles/highlighter';

type PropsTypes = {
    language: string
    value: string
}

export const renderers:{code: ({ language, value }: PropsTypes) => JSX.Element} = {
  code: ({ language, value }) => (
    <SyntaxHighlighter style={highlighter} language={language}>{value}</SyntaxHighlighter>
  )
};