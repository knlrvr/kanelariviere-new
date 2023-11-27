import { ImageResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'KNLRVR'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');
  const font = fetch(
    new URL('../../public/Migra-Extralight.otf', import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://knlrvr.dev/og-bg.png)',
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Migra',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {title}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Migra',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}