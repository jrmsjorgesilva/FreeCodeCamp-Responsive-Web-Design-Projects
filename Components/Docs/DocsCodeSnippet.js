import React, { useState } from 'react'
import styles from '../../styles/css/Docs.module.css'
import { FaCopy } from 'react-icons/fa'

const DocsCodeSnippet = ({ children }) => {

  const [copied, setCopied] = useState(() => false);

  const codeCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      console.log('erro ao copiar para clipboard');
    }

  }

  return (
    <code className={styles.code}>
      <span className={styles.code__clipboardIcon} onClick={() => codeCopy()}>
        <FaCopy /> &nbsp; {copied && 'Copied to Clipboard!'}
      </span>
      {children}
    </code>
  )
}

export default DocsCodeSnippet