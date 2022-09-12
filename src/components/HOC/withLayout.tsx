import Layout from "../Layout";

const withLayout = (Component) => {
  return (props) => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

export default withLayout;
