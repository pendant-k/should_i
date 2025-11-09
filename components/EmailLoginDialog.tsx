import { RefObject } from 'react'

interface EmailLoginDialogProps {
    dialogRef: RefObject<HTMLDialogElement | null>
    onClose: () => void
    onLogin: (email: string, password: string) => void
}

export default function EmailLoginDialog({
    dialogRef,
    onClose,
    onLogin,
}: EmailLoginDialogProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        onLogin(email, password)
    }

    return (
        <dialog ref={dialogRef} className="modal">
            <div className="modal-box flex flex-col">
                {/* modal header */}
                <h3 className="font-bold text-lg mb-8">Login with Email</h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <section className="flex flex-col gap-4">
                        <label className="floating-label">
                            <span>Your Email</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="mail@site.com"
                                className="input"
                                required
                            />
                        </label>
                        <label className="floating-label">
                            <span>Your Password</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="enter your password"
                                className="input"
                                required
                            />
                        </label>
                    </section>

                    {/* modal control section */}
                    <section className="flex justify-end gap-2">
                        <button
                            type="button"
                            className="btn btn-outline"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </section>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button type="button" onClick={onClose} />
            </form>
        </dialog>
    )
}
