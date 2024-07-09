# Rules

1. Test incoming query messages by making assertions about what they send back.
2. Test incoming command messages by making assertions about direct public side effects.
3. Do not test private methods. Do not make assertions about their result. Do not expect to send them.
4. Do not test outgoing query messages. Do not make assertions about their result. Do not expect to send them.
5. Expect to send outgoing command messages.
6. Honor the contract. Ensure test doubles stay in sync with the API.

## Take-Aways

- Test the interface, not the implementation.
- Receiver of incoming message has sole responsibilty for asserting the result and direct public side effects.
- Break rules if it saves money during development.
- If a message has no visible side effects, the sender should not test it.
- Be a minimalist.
- Use good judgement.
- Test everything once.
- Test the interface.
- Trust collaborators.
- Insist on simplicity.
- Practice the tricks.
