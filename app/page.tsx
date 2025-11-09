'use client'
import useModal from '@/hooks/useModal'
import EmailLoginDialog from '@/components/EmailLoginDialog'

// Landing page
export default function Home() {
    const { modalRef, openModal, closeModal } = useModal()

    const handleGoogleLogin = () => {
        // TODO: Implement Google OAuth login
        console.log('Google login clicked')
    }

    const handleEmailLogin = (email: string, password: string) => {
        // TODO: Implement email/password login
        console.log('Email login attempt:', { email, password })
        closeModal()
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col text-center">
                <h1 className="text-5xl font-bold">Should I?</h1>
                <p className="py-6">
                    Platform to help you decide if you should do something
                </p>
                <div className="flex flex-col gap-4">
                    <button className="btn btn-neutral" onClick={openModal}>
                        Get Started with Email
                    </button>
                    <button
                        className="btn btn-accent"
                        onClick={handleGoogleLogin}
                    >
                        Get Started with Google
                    </button>
                </div>
            </div>

            <EmailLoginDialog
                dialogRef={modalRef}
                onClose={closeModal}
                onLogin={handleEmailLogin}
            />
        </div>
    )
}
