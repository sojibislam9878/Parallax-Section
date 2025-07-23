import Layout from "../Layout/Layout"
import Header from "../Parts/Header"

const UpgradeToPro = ({ isPremium }) => {
  return (
    <Layout isPremium={isPremium}>
      <div className="feature-section" >
        <iframe src='https://checkout.freemius.com/plugin/19833/plan/32907/' loading="eager" width='100%' style={{ height: "calc(100vh - 200px)", }}  ></iframe>
      </div>
    </Layout>
  );
}

export default UpgradeToPro
