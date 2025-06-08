  import { Button } from '~/components/button';
  import { DecoderText } from '~/components/decoder-text';
  import { Divider } from '~/components/divider';
  import { Footer } from '~/components/footer';
  import { Heading } from '~/components/heading';
  import { Icon } from '~/components/icon';
  import { Input } from '~/components/input';
  import { Section } from '~/components/section';
  import { Text } from '~/components/text';
  import { tokens } from '~/components/theme-provider/theme';
  import { Transition } from '~/components/transition';
  import { useFormInput } from '~/hooks';
  import { useRef } from 'react';
  import { cssProps, msToNum, numToMs } from '~/utils/style';
  import { baseMeta } from '~/utils/meta';
  import styles from './contact.module.css';

  export const meta = () => {
    return baseMeta({
      title: 'Contact',
      description:
        'Send me a message if you’re interested in discussing a project or if you just want to say hi',
    });
  };

  const MAX_EMAIL_LENGTH = 512;
  const MAX_MESSAGE_LENGTH = 4096;

  export const Contact = () => {
    const errorRef = useRef();
    const email = useFormInput('');
    const message = useFormInput('');
    const initDelay = tokens.base.durationS;

    return (
      <Section className={styles.contact}>
        <Transition unmount in timeout={1600}>
          {({ status, nodeRef }) => (
            <form
              action="https://formspree.io/f/mqabpezz"
              method="POST"
              className={styles.form}
              ref={nodeRef}
            >
              <Heading
                className={styles.title}
                data-status={status}
                level={3}
                as="h1"
                style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
              >
                <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
              </Heading>
              <Divider
                className={styles.divider}
                data-status={status}
                style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
              />
              {/* Hidden honeypot field to identify bots */}
              <Input
                className={styles.botkiller}
                label="Name"
                name="name"
                maxLength={MAX_EMAIL_LENGTH}
              />
              <Input
                required
                className={styles.input}
                data-status={status}
                style={getDelay(tokens.base.durationXS, initDelay)}
                autoComplete="email"
                label="Your email"
                type="email"
                name="email"
                maxLength={MAX_EMAIL_LENGTH}
                {...email}
              />
              <Input
                required
                multiline
                className={styles.input}
                data-status={status}
                style={getDelay(tokens.base.durationS, initDelay)}
                autoComplete="off"
                label="Message"
                name="message"
                maxLength={MAX_MESSAGE_LENGTH}
                {...message}
              />
              <Button
                className={styles.button}
                data-status={status}
                type="submit"
                style={getDelay(tokens.base.durationM, initDelay)}
                icon="send"
              >
                Send message
              </Button>
            </form>
          )}
        </Transition>

        {/* Remove success message logic here since redirect is handled by Formspree */}
        <Footer className={styles.footer} />
      </Section>
    );
  };

  function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
    const numDelay = msToNum(delayMs) * multiplier;
    return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
  }
