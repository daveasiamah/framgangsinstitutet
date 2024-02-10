import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, TopLevelBlock } from '@contentful/rich-text-types';
import Image from 'next/image';

// interface Node {
//   nodeType: string;
//   content?: Node[];
//   data?: {
//     target?: {
//       fields?: {
//         file?: {
//           url: string;
//           title?: string;
//           details?: {
//             image?: {
//               width: number;
//               height: number;
//             };
//           };
//         };
//       };
//     };
//   };
// }

const ContentfulRichText: React.FC<{ content: TopLevelBlock[] }> = ({ content }) => {
  return (
    <div>
      {documentToReactComponents({
        data: {}, content,
        nodeType: BLOCKS.DOCUMENT
      }, {
          preserveWhitespace: true,
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
              const { title, description, file } = node.data.target.fields;
              const imageUrl = `https:${file.url}`;
              return (
                <div>
                   <Image 
                    src={imageUrl} alt={title || ''} 
                    width={file.details.image.width} 
                    height={file.details.image.height} 
                  />
                </div>
              );
            }
          }
        }
      )}
    </div>
  );
};

export default ContentfulRichText;