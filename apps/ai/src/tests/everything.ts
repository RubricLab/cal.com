export default async function Test(prompt: string) {
  const formData = new FormData();

  formData.append("dkim", "{@domain-com.22222222.gappssmtp.com : pass}");
  formData.append(
    "envelope",
    JSON.stringify({
      to: [`hi@cal-dexter.rubriclab.com`],
      from: "dexter@dexterstorey.com",
    })
  );
  // needs to be a source for simpleParser and include text and subject
  formData.append(
    "email",
    `
  ${prompt}`
  );

  const receive = await fetch(
    `https://dexter.rubriclab.com/api/receive?parseKey=iwejrbcvpi2brvpiwhbrvpiuhwbevpribweiufvb23jnwviuev`,
    {
      method: "POST",
      body: formData,
    }
  );

  console.log(receive);
}

async function TestEverything() {
  await Test("book a meeting next week at a good time with @usa");
}

TestEverything();
