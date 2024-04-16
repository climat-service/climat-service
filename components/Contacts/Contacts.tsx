import ContentZone from "../ui/ContentZone";

const Contacts = () => {
  const contacts = [
    {
      name: "Номер телефона",
      text: "+7 905 411-39-48",
    },
    {
      name: "Электронная почта",
      text: "K@eco.ru",
    },
  ];

  return (
    <main>
      <ContentZone className="mb-16">
        <h1 className="font-bold my-6 xl:mb-8">Контакты</h1>
        <ul className="flex flex-col gap-6 xl:flex-row xl:border xl:border-[#EEE] xl:max-w-[620px] xl:items-center xl:justify-center xl:py-10">
          {contacts.map((contact, index) => {
            return (
              <li key={index}>
                <article className="flex items-start justify-center flex-col gap-3 py-3 max-w-[255px] px-6 border-2 border-[#40A74B] rounded-xl">
                  <p className="font-semibold">{contact.name}</p>
                  <p className="text-sm">{contact.text}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </ContentZone>
    </main>
  );
};

export default Contacts;
