import ContainerComponent from '@/components/ContainerComponent';
import UserData from './user';

export default function ContainerComponentHome({ children }) {
  return (
    <>
      <section>
        <h3>Container Component Home</h3>
        <ContainerComponent id={1}>
          <UserData />
        </ContainerComponent>
        {children}
      </section>
    </>
  );
}
