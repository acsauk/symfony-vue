<template>
    <div class="tile is-ancestor">
        <!--<div class="tile is-vertical is-parent box user-input">-->
            <!--<div class="tile is-child">-->
                <!--<button v-if="state === 'default'" class="btn btn-primary" @click="changeState('edit')">Add Item</button>-->
                <!--<button v-else class="btn btn-cancel" @click="changeState('default')">Cancel</button>-->
            <!--</div>-->

            <!--<div v-if="state === 'edit'" class="tile">-->
                <!--<input type="text" v-model="newItem" placeholder="Add an item" @keyup.enter="saveItem">-->
                <!--<p>{{ characterCount }}/200</p>-->
                <!--<button class="btn btn-primary" :disabled="newItem.length === 0" @click="saveItem">Save Item</button>-->
            <!--</div>-->
        <!--</div>-->

        <div class="tile is-vertical is-parent box">
            <div class="navbar is-transparent">
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Filter
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item" href="/">
                                    Date
                                </a>
                                <a class="navbar-item" href="/">
                                    Amount
                                </a>
                                <a class="navbar-item" href="/">
                                    Status
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <a class="navbar-item" href="/">
                            New
                        </a>
                        <a class="navbar-item" href="/">
                            Export
                        </a>
                    </div>
                </div>
            </div>

            <!--<div class="tile">-->
                <table class="table">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Customer</th>
                            <th>Customer</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="charge in charges">
                            <td>{{charge.amount}}</td>
                            <td>{{charge.description}}</td>
                            <td>{{charge.customer_id}}</td>
                            <td>{{charge.customer}}</td>
                            <td>{{charge.purchase_date}}</td>
                        </tr>
                        <!--<tr>-->
                            <!--<td>5.50</td>-->
                            <!--<td>Lean Gains Subscription</td>-->
                            <!--<td>Alex Saunders</td>-->
                            <!--<td>2018/07/07 12:53:00</td>-->
                        <!--</tr>-->
                        <!--<tr>-->
                            <!--<td>4.50</td>-->
                            <!--<td>iFitness Subscription</td>-->
                            <!--<td>Jane Doe</td>-->
                            <!--<td>2018/07/04 08:44:22</td>-->
                        <!--</tr>-->
                        <!--<tr>-->
                            <!--<td>5.50</td>-->
                            <!--<td>Lean Gains Subscription</td>-->
                            <!--<td>Chug Chuggington</td>-->
                            <!--<td>2018/07/04 11:31:12</td>-->
                        <!--</tr>-->
                    </tbody>
                </table>

                <!--<ul>-->
                    <!--<li v-for="item in reversedItems" :class="{strikeout: item.purchased}" @click="togglePurchased(item)">{{ item.label }}</li>-->
                <!--</ul>-->
                <!--<p v-if="items.length === 0">No items to buy :(</p>-->
            <!--</div>-->

            <nav class="pagination" role="navigation" aria-label="pagination">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next Page</a>
                <ul class="pagination-list">
                    <li>
                        <a class="pagination-link" aria-label="Goto page 1">1</a>
                    </li>
                    <li>
                        <a class="pagination-ellipsis">&hellip;</a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 7">7</a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 8">8</a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 9">9</a>
                    </li>
                    <li>
                        <a class="pagination-ellipsis">&hellip;</a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 20">20</a>
                    </li>
                </ul>
            </nav>
            <button class="button" @click="fetchCharges">Load payments</button>

        </div>

    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {

            }
        },

        computed: {
            ...mapState({
                charges: state => state.chargesTable.chargeItems
            }),

            ...mapGetters({

            })
        },

        methods: {
            ...mapActions({
                fetchCharges: 'fetchCharges'
            })
        },
    }
</script>

<style scoped>

</style>