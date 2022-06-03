import TributeContent from '../Components/Tribute/TributeContent';

const tribute = ({ fetchedSrc, fetchedAlt }) => {
  return (
    <>
      <TributeContent 
        fetchedAlt={fetchedAlt} 
        fetchedSrc={fetchedSrc} 
      />
    </>
  )
}

export const getStaticProps = async () => {

  const API_URL='https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5'

  const response = await fetch(API_URL);
  const data = await response.json();
  const fetchedSrc = data.map(elem => elem.url);
  const fetchedAlt = data.map(elem => elem.title);

  return {
    props: {
      fetchedSrc,
      fetchedAlt,
    }
  }

}

export default tribute;