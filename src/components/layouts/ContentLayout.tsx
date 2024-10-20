import { Head } from '@components/seo';

type ContentLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const ContentLayout = ({
  title,
  children,
}: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />

      <div className="relative max-w-5xl p-10">
        <h1>{title}</h1>

        <div className="mt-5">{children}</div>
      </div>
    </>
  );
};
