import Prose from "@components/Prose";

interface Props {
  guide: any;
}

export default function ContentDisplay({ guide }: Props) {
  const { content } = guide[0];

  return (
    <section className="pt-8 pb-5">
      <Prose data={content} />
    </section>
  );
}
