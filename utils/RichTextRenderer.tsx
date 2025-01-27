import React from "react"
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, Document, Node } from "@contentful/rich-text-types"

// Define props for the component
interface RichTextRendererProps {
  richText: Document // Contentful rich text document
}

// Explicitly typing `node` and `children` parameters
const RichTextRenderer: React.FC<RichTextRendererProps> = ({ richText }) => {
  // Define options to customize rendering
  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => (
        <h1 className="font-inter text-4xl font-bold mb-6">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
        <h2 className="font-inter text-2xl font-semibold mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
        <h3 className="font-inter text-xl font-semibold mb-4">{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
        <p className="font-inter text-lg leading-relaxed mb-4">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
        <ul className="font-inter ml-6 mb-1">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => (
        <ol className="font-inter list-decimal ml-6 mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
        <li className="font-inter list-disc mb-2">{children}</li>
      ),
      [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
        // Adding type assertion to safely access `node.data.uri`
        const uri = (node.data as { uri: string }).uri
        return (
          <a
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-blue-600 underline hover:text-blue-800"
          >
            {children}
          </a>
        )
      },
    },
  }

  return <div>{documentToReactComponents(richText, options)}</div>
}

export default RichTextRenderer
