import Content from '../Parts/Content';
import Header from '../Parts/Header';


const Layout = ({ children, isPremium }) => {

  const navigation = [
    { name: 'Welcome', href: '/welcome' },
    { name: 'Our Other Popular Plugins', href: '/most-popular' },
    // { name: 'Demo', href: '/demo' },
    !isPremium && { name: 'Free vs Pro', href: '/free-vs-pro' },
  ]

  return (
    <>
      <div className="bplContainer">
        <Header navigation={navigation} />
        <Content>{children}</Content>
      </div>
    </>
  )
}

export default Layout;