# Instruction

For access for restart and rebuild code use terminal program
In terminal type:  `ssh root@5.78.51.103`

Enter password:  `Vm7JijrLRtLm3CVCvee3`

Next step type: `cd project` at this folder you can find two folders dev.back and dev.front

Before setup changes for routing type `pm2 delete all` - you stop backend and frontend app.

General routing depend on folder name, for example for resources you can find code at folder dev.front/pages/resources at file index.tsx. Use `cd project` and type `mc`. Also if you want to change prefix `resources` you need to rename folder `resources` as you need. Routes depend at folder name and includes automaticaly.

At line 68-74 you can find main part for includes files depend on step number, I.e stepName == "company" && <Step1 />. You can change step as you need - this part `stepName == "company"`
Next - you need to go to the folder `components/resourceForms` and change redirects for the next step at files company, strength, opportunities, threats, weaknesses, threat2Opportunities, weaknesses2Strenth

For example for change redirect from company to next step you need to change this part of code:
`
<Formik
initialValues={stepData}
enableReinitialize
validationSchema={SubmitSchema}
onSubmit={(values: any) => {
dispatch(setCompanyAction(values));
router.push("/resources/strengths");
}}
>
` you need to change `router.push("/resources/strengths");`

For other step it little bit complicated, cuz you need to change next and prev step route, for this at file strength.tsx find code
`
if (tmpError.length === 0 && type === "next") {
router.push("/resources/weaknesses");
}
if (tmpError.length === 0 && type === "modal") {
dispatch(showModalStrengthsAction(false));
}
if (type === "prev") {
router.push("/resources/company");
}
`
And change prefixes for next/prev state, mean this code `router.push("/resources/weaknesses");`

When you finish to changes save file and out from editor type `exit` you turn back to terminal.
After changes you need to rebuild project files, for that at folder dev.front typing `rpm run build` and wait when build process finished.
After go to folder dev.back and type
`pm2 start "export OPENSSL_CONF=/etc/ssl/; node index.js" --name "App Backend"` this command starting your backend app
After that go to dev.front and type `pm2 start "npm run start" --name "App Frontend"` you start you frontend app

That's all

