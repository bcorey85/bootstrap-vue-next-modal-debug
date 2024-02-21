import { render } from '@testing-library/vue'

import { BModal } from 'bootstrap-vue-next'

describe('BaseModal', () => {
    it('should render and contain data-testid', async () => {
        render(BModal)
    })
})
