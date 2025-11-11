<template>
  <MkTheApp>
    <AppMobileContainer>
      <div class="sk-ErrorPage">
        <div class="sk-ErrorPage-container">
          <div class="sk-ErrorPage-status">
            <h1>
              <MkIcon icon="lucide-lab:pac-man" data-icon="pac" />
              {{ props.error.statusCode }}
              <MkIcon icon="lucide-lab:pac-man-ghost" data-icon="ghost" />
            </h1>
          </div>
          <p class="sk-ErrorPage-message">
            {{ props.error.message || props.error.statusMessage || `On a eu un p'tit soucis !` }}
          </p>
          <div class="sk-ErrorPage-actions">
            <NuxtLink to="/">
              <MkButton variant="outline">
                Retour à la maison !
              </MkButton>
            </NuxtLink>
          </div>
        </div>
      <!-- <pre /> -->
      <!-- <div class="sk-ErrorPage-main">
        <div class="sk-ErrorPage-container">
          <slot />
        </div>
      </div> -->
      </div>
    </AppMobileContainer>
  </MkTheApp>
</template>

<script lang="ts" setup>
import type { H3Error } from 'h3';

interface Props {
  error: H3Error;
}

const props = defineProps<Props>();
</script>

<style lang="scss">
.sk-ErrorPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--mk-size-8);

  &-container {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-4);
  }

  &-status {
    font-family: var(--app-font-family-monospace);
    font-size: 6rem;

    h1 {
      display: flex;
      gap: var(--mk-size-6);
      align-items: baseline;

      svg {
        font-size: 0.6em;

        &[data-icon='pac'] {
          animation-name: pac-move, pac-fade;
          animation-duration: 2048ms;
          animation-timing-function: linear;
          animation-iteration-count: infinite;

          @keyframes pac-fade {
            0% {
              opacity: 0;
            }

            25% {
              opacity: 1;
            }

            50% {
              opacity: 0;
            }

            100% {
              opacity: 0;
            }
          }

          @keyframes pac-move {
            0% {
              transform: translate(-50%);
            }

            25% {
              transform: translate(-25%);
            }

            50% {
              transform: translate(0%);
            }

            100% {
              transform: translate(0%);
            }
          }
        }

        &[data-icon='ghost'] {
          animation-name: ghost-move, ghost-fade;
          animation-duration: 8192ms;
          animation-timing-function: linear;
          animation-iteration-count: infinite;

          @keyframes ghost-fade {
            0% {
              opacity: 1;
            }

            15% {
              opacity: 0;
            }

            30% {
              opacity: 0;
            }

            57% {
              opacity: 1;
            }

            75% {
              opacity: 1;
            }

            78% {
              opacity: 0;
            }

            90% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
          }

          @keyframes ghost-move {
            0% {
              transform: rotate(0deg) translate(20px) rotate(0deg);
            }

            100% {
              transform: rotate(360deg) translate(20px) rotate(-360deg);
            }
          }
        }
      }
    }
  }

  &-message {
    font-size: 2rem;
  }

  &-actions {
    align-self: flex-end;
  }

  &-main {
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 16px;

    &-container {
      display: flex;
      flex: 1 1 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: var(--app-container-width-size);
    }
  }
}
</style>
