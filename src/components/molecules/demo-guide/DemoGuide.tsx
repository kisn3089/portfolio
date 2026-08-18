import { Copy, CopyCheck } from "lucide-react"
import {
  AccountLayout,
  DemoAccountCopy,
  DemoAccountHint,
  DemoAccountLabel,
  DemoAccountLayout,
  DemoGuideLayout,
  GuideLabel,
  GuideLayout,
} from "./DemoGuideStyles"
import { useEffect, useRef, useState } from "react"
import SectionHeading from "../ssurak-section/SectionHeading"

type AccountId = "id" | "pw"

type Account = {
  id: AccountId
  hint: string
  label: string
  value: string
}

const ACCOUNTS: Account[] = [
  {
    id: "id",
    hint: "Email",
    label: "demo@ssurak.com",
    value: "demo@ssurak.com",
  },
  {
    id: "pw",
    hint: "Password",
    label: "qwer1234!",
    value: "qwer1234!",
  },
]

const COPIED_DURATION = 2000

export default function DemoGuide({ children }: { children: React.ReactNode }) {
  const [copiedId, setCopiedId] = useState<AccountId | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const handleCopy = async ({ id, value }: Account) => {
    await navigator.clipboard.writeText(value)

    setCopiedId(id)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopiedId(null), COPIED_DURATION)
  }

  return (
    <DemoGuideLayout>
      <SectionHeading label="Demo" title="직접 확인하기" />
      <GuideLayout>
        <GuideLabel>{`아래 계정으로 로그인하여 주문해보세요.`}</GuideLabel>
        <AccountLayout>
          {ACCOUNTS.map((account) => (
            <DemoAccountLayout key={account.id}>
              <DemoAccountHint>{account.hint}</DemoAccountHint>
              <DemoAccountLabel>{account.label}</DemoAccountLabel>
              <DemoAccountCopy
                type="button"
                aria-label={`${account.hint} 복사`}
                onClick={() => handleCopy(account)}>
                {copiedId === account.id ? (
                  <CopyCheck color="#fff" width={16} height={16} />
                ) : (
                  <Copy color="#fff" width={16} height={16} />
                )}
              </DemoAccountCopy>
            </DemoAccountLayout>
          ))}
        </AccountLayout>
        {children}
      </GuideLayout>
    </DemoGuideLayout>
  )
}
