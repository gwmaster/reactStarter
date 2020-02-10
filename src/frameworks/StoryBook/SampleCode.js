import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SampleCode = ({componentName , params : recivedParams}) => {
    const {children , ...params} = recivedParams
    const parseParam = (name) => {
        const value = params[name];
        const type =typeof  value;
        switch (type) {
            case 'boolean':
            case 'number':
            case 'object':
                return  `\t${name}={${JSON.stringify(value)}}`
            case 'function':
                return  ''
            default:
                return  `\t${name}=${JSON.stringify(value)}`
        }
    }


    let code = `<${componentName} `;
    code += '\n'
    code += Object.keys(params).map((name,value) => parseParam(name)).join('\n')
    code += '>'
    code += `\n${children}\n`
    code += `</${componentName}>`
  return (
      <SyntaxHighlighter language="javascript" style={dark}>
          {code}
      </SyntaxHighlighter>
  )
}

SampleCode.propTypes = {
    componentName : PropTypes.string,
    params : PropTypes.object
}
SampleCode.defaultProps = {

}

export default SampleCode