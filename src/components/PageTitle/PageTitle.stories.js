/* eslint-disable */
import PageTitle from "./PageTitle";

export default {
  title: "PageTitle",
  component: PageTitle,
};

export const Default = () => (
  <PageTitle title="Summer Camp" description="Open air Camp for kids" />
);

Default.story = {
  name: "default",
};
