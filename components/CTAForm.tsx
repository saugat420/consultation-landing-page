import { CheckCircle2, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FLODESK_FORM_ID = "6adf7429625c8f6b87440d59";
const FLODESK_ROOT_CLASS = `ff-${FLODESK_FORM_ID}`;
const FLODESK_CONFIG =
  "eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJyZWRpcmVjdCIsIm1lc3NhZ2UiOiIiLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vYXBwb2ludG1lbnQuZGlnaXRhbHNhdWdhdC5jb20vdGhhbmsteW91In0sImNvaSI6dHJ1ZSwic2hvd0ZvclJldHVyblZpc2l0b3JzIjp0cnVlLCJub3RpZmljYXRpb24iOnRydWUsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0=";

const fieldClass =
  "h-12 rounded-xl border-zinc-300 bg-white px-4 text-base text-zinc-950 shadow-none placeholder:text-zinc-400 focus-visible:border-amber-500 focus-visible:ring-4 focus-visible:ring-amber-100";

export function CTAForm() {
  return (
    <>
      <section id="consultation-form" className="form-section scroll-mt-4 px-5 py-16 sm:px-6 sm:py-24" aria-labelledby="form-title">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="lg:sticky lg:top-8">
            <p className="eyebrow">Your free consultation</p>
            <h2 id="form-title" className="text-balance text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">Book Your Free Consultation</h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-zinc-300">Share a few details about your business so the conversation can focus on your current challenges and opportunities.</p>
            <ul className="mt-7 space-y-3" aria-label="Consultation includes">
              <li className="supporting-point"><CheckCircle2 aria-hidden="true" />One-to-One Consultation</li>
              <li className="supporting-point"><CheckCircle2 aria-hidden="true" />Customized Strategy for Your Business</li>
            </ul>
            <p className="mt-7 flex items-center gap-2 text-sm text-zinc-400"><LockKeyhole aria-hidden="true" className="h-4 w-4" />We respect your privacy. No spam.</p>
          </div>

          <div
            className={`${FLODESK_ROOT_CLASS} contents`}
            data-ff-el="root"
            data-ff-version="3"
            data-ff-type="inline"
            data-ff-name="inlineNoImage"
            data-ff-stage="default"
          >
            <div data-ff-el="config" data-ff-config={FLODESK_CONFIG} hidden />
            <form
              className="form-card"
              action={`https://form.flodesk.com/forms/${FLODESK_FORM_ID}/submit`}
              method="post"
              data-ff-el="form"
            >
              <div data-ff-el="content">
                <div data-ff-el="fields">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FieldGroup label="Full Name" name="firstName">
                      <Input id="firstName" name="firstName" type="text" maxLength={255} autoComplete="name" placeholder="Enter your full name" className={fieldClass} required />
                    </FieldGroup>
                    <FieldGroup label="Active Email" name="email">
                      <Input id="email" name="email" type="email" maxLength={255} inputMode="email" autoComplete="email" placeholder="Enter your email address" className={fieldClass} required />
                    </FieldGroup>
                    <FieldGroup label="WhatsApp Number" name="whatsappNumber">
                      <Input id="whatsappNumber" name="fields.whatsappNumber" type="tel" maxLength={255} inputMode="tel" autoComplete="tel" placeholder="Enter your WhatsApp number" className={fieldClass} required />
                    </FieldGroup>
                    <FieldGroup label="Business Name" name="businessName">
                      <Input id="businessName" name="fields.businessName" type="text" maxLength={255} autoComplete="organization" placeholder="Enter your business name" className={fieldClass} required />
                    </FieldGroup>
                  </div>
                  <div className="mt-5">
                    <FieldGroup label="Website or Facebook URL" name="websiteOrFacebookLink">
                      <Input id="websiteOrFacebookLink" name="fields.websiteOrFacebookLink" type="url" maxLength={255} inputMode="url" autoComplete="url" placeholder="https://" className={fieldClass} required />
                    </FieldGroup>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="anythingYouWantToSay" className="field-label">Anything You Want to Say</label>
                    <Textarea id="anythingYouWantToSay" name="fields.anythingYouWantToSay" maxLength={255} placeholder="Tell us about your business or marketing challenges" className="mt-2 min-h-28 resize-y rounded-xl border-zinc-300 bg-white px-4 py-3 text-base text-zinc-950 shadow-none placeholder:text-zinc-400 focus-visible:border-amber-500 focus-visible:ring-4 focus-visible:ring-amber-100" required />
                  </div>
                  <input type="text" maxLength={255} name="confirm_email_address" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                </div>

                <div data-ff-el="footer">
                  <Button type="submit" data-ff-el="submit" className="mt-7 h-13 w-full rounded-xl bg-[#ffc400] px-5 text-base font-extrabold text-black shadow-[0_14px_30px_rgba(255,196,0,0.22)] hover:bg-[#ffd433] focus-visible:ring-4 focus-visible:ring-amber-200">
                    Book My Free Consultation
                  </Button>
                </div>
                <p className="mt-4 text-center text-sm leading-6 text-zinc-500">Your details are securely submitted through Flodesk.</p>
              </div>
              <div data-ff-el="success" className="hidden" aria-live="polite">Your request has been received.</div>
              <div data-ff-el="error" className="mt-4 text-sm font-medium text-red-600" role="alert" />
            </form>
          </div>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,t,h,s,n){w.FlodeskObject=n;var fn=function(){(w[n].q=w[n].q||[]).push(arguments);};w[n]=w[n]||fn;var f=d.getElementsByTagName(t)[0];var v='?v='+Math.floor(new Date().getTime()/(120*1000))*60;var sm=d.createElement(t);sm.async=true;sm.type='module';sm.src=h+s+'.mjs'+v;f.parentNode.insertBefore(sm,f);var sn=d.createElement(t);sn.async=true;sn.noModule=true;sn.src=h+s+'.js'+v;f.parentNode.insertBefore(sn,f);})(window,document,'script','https://assets.flodesk.com','/universal','fd');var handleFlodeskForm=function(){window.fd('form:handle',{formId:'${FLODESK_FORM_ID}',rootEl:'.${FLODESK_ROOT_CLASS}'});};var scheduleFlodeskForm=function(){setTimeout(handleFlodeskForm,1500);};if(document.readyState==='complete'){scheduleFlodeskForm();}else{window.addEventListener('load',scheduleFlodeskForm,{once:true});}`,
        }}
      />
    </>
  );
}

function FieldGroup({ label, name, children }: { label: string; name: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="field-label">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
