import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#181A1B',
          borderRadius: 36,
        }}
      >
        <div
          style={{
            width: 90,
            height: 90,
            backgroundColor: '#C85A32',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 18,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              backgroundColor: '#F7F5F0',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
