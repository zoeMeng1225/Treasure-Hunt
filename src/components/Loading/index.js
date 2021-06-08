import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = ({ location }) => {
  return <Spin style={location} indicator={antIcon} />;
};

export default Loading;
