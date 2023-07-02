import { withImage } from '../component/withImage';

const ImageFromUrl = ({ image, loading, error }) => {
  if (error) {
    <div>
      <p>{error}</p>
    </div>;
  }

  if (loading) {
    <div>
      <p>{loading}</p>
    </div>;
  }
  if (!image) return null;
  return (
    <div>
      <img src={image} alt='fetched image' />
    </div>
  );
};
const url = 'https://placekitten.com/200/300';

const ComponentWithImage = withImage(ImageFromUrl, { url });

export default function HigherOrderComponentThreeDemo() {
  return <ComponentWithImage />;
}
